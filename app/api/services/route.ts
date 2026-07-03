import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

/**
 * GET /api/services → Fetch all active services with pathology count
 * 
 * Query params:
 * - includePathologies: boolean - include pathologies for each service
 */
export async function GET(req: NextRequest) {
  try {
    const searchParams = req.nextUrl.searchParams;
    const includePathologies = searchParams.get('includePathologies') === 'true';

    const services = await prisma.service.findMany({
      where: { /* Currently no filter, all services are shown */ },
      orderBy: { createdAt: 'desc' },
      include: includePathologies ? {
        pathologies: {
          where: { isActive: true },
          select: { id: true, name: true, slug: true },
        },
      } : false,
    });
    return NextResponse.json({ success: true, data: services });
  } catch (error) {
    console.error('Failed to fetch services:', error);
    return NextResponse.json(
      { success: false, error: 'Erreur serveur' },
      { status: 500 }
    );
  }
}

/**
 * POST /api/services → Create a new service
 * 
 * Required fields:
 * - name: string
 * - slug: string
 * 
 * Optional fields:
 * - description: string
 * - icon: string
 * - featured: boolean
 */
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, slug, description, longDescription, icon, featured } = body;

    // Validate required fields
    if (!name || !slug) {
      return NextResponse.json(
        { success: false, error: 'Le nom et le slug sont requis' },
        { status: 400 }
      );
    }

    // Check if slug already exists
    const existingService = await prisma.service.findUnique({
      where: { slug },
    });

    if (existingService) {
      return NextResponse.json(
        { success: false, error: 'Ce slug existe déjà' },
        { status: 409 }
      );
    }

    const service = await prisma.service.create({
      data: {
        name,
        slug,
        description: description || null,
        longDescription: longDescription || null,
        icon: icon || null,
        featured: featured || false,
      },
    });

    return NextResponse.json({ success: true, data: service }, { status: 201 });
  } catch (error: any) {
    console.error('Failed to create service:', error);

    if (error.code === 'P2002') {
      return NextResponse.json(
        { success: false, error: 'Le nom ou slug existe déjà' },
        { status: 409 }
      );
    }

    // In development, return the actual error message to help debugging
    if (process.env.NODE_ENV !== 'production') {
      return NextResponse.json(
        { success: false, error: error?.message || 'Erreur serveur', details: String(error) },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: false, error: 'Erreur serveur' },
      { status: 500 }
    );
  }
}