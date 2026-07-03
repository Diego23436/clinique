import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

/**
 * GET /api/services/:id → Fetch a single service with all pathologies
 */
export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const serviceId = parseInt(id);

    if (isNaN(serviceId)) {
      return NextResponse.json(
        { success: false, error: 'ID invalide' },
        { status: 400 }
      );
    }

    const service = await prisma.service.findUnique({
      where: { id: serviceId },
      include: {
        pathologies: {
          where: { isActive: true },
          include: {
            medias: {
              orderBy: { displayOrder: 'asc' },
            },
          },
        },
      },
    });

    if (!service) {
      return NextResponse.json(
        { success: false, error: 'Service non trouvé' },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, data: service });
  } catch (error) {
    console.error('Failed to fetch service:', error);
    return NextResponse.json(
      { success: false, error: 'Erreur serveur' },
      { status: 500 }
    );
  }
}

/**
 * PUT /api/services/:id → Update a service
 */
export async function PUT(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const serviceId = parseInt(id);

    if (isNaN(serviceId)) {
      return NextResponse.json(
        { success: false, error: 'ID invalide' },
        { status: 400 }
      );
    }

    const body = await req.json();
    const { name, slug, description, longDescription, icon, featured } = body;

    if (!name || !slug) {
      return NextResponse.json(
        { success: false, error: 'Le nom et le slug sont requis' },
        { status: 400 }
      );
    }

    // Check if slug is unique (excluding current service)
    const existingService = await prisma.service.findUnique({
      where: { slug },
    });

    if (existingService && existingService.id !== serviceId) {
      return NextResponse.json(
        { success: false, error: 'Ce slug existe déjà' },
        { status: 409 }
      );
    }

    const service = await prisma.service.update({
      where: { id: serviceId },
      data: {
        name,
        slug,
        description: description || null,
        longDescription: longDescription || null,
        icon: icon || null,
        featured: featured || false,
      },
    });

    return NextResponse.json({ success: true, data: service });
  } catch (error: any) {
    console.error('Failed to update service:', error);

    if (error.code === 'P2025') {
      return NextResponse.json(
        { success: false, error: 'Service non trouvé' },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { success: false, error: 'Erreur serveur' },
      { status: 500 }
    );
  }
}

/**
 * DELETE /api/services/:id → Delete a service
 * 
 * Also cascades deletion to:
 * - All associated pathologies
 * - All media files of those pathologies
 */
export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const serviceId = parseInt(id);

    if (isNaN(serviceId)) {
      return NextResponse.json(
        { success: false, error: 'ID invalide' },
        { status: 400 }
      );
    }

    await prisma.service.delete({
      where: { id: serviceId },
      // Cascade delete is handled by Prisma schema
    });

    return NextResponse.json({
      success: true,
      message: 'Service supprimé avec succès',
    });
  } catch (error: any) {
    console.error('Failed to delete service:', error);

    if (error.code === 'P2025') {
      return NextResponse.json(
        { success: false, error: 'Service non trouvé' },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { success: false, error: 'Erreur serveur' },
      { status: 500 }
    );
  }
}
