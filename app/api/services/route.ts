import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

// GET /api/services → liste tous les services actifs
export async function GET() {
  try {
    const services = await prisma.medicalService.findMany({
      where: { isActive: true },
      orderBy: { createdAt: 'desc' },
    });
    return NextResponse.json({ success: true, data: services });
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Erreur serveur' }, { status: 500 });
  }
}

// POST /api/services → créer un service (appelé depuis admin)
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { title, slug, iconName, shortDescription, fullDescription } = body;

    if (!title || !slug || !shortDescription || !fullDescription) {
      return NextResponse.json({ success: false, error: 'Champs requis manquants' }, { status: 400 });
    }

    const service = await prisma.medicalService.create({
      data: {
        title,
        slug,
        iconName: iconName || 'default',
        shortDescription,
        fullDescription,
        isActive: true,
      },
    });

    return NextResponse.json({ success: true, data: service }, { status: 201 });
  } catch (error: any) {
    if (error.code === 'P2002') {
      return NextResponse.json({ success: false, error: 'Ce slug existe déjà' }, { status: 409 });
    }
    return NextResponse.json({ success: false, error: 'Erreur serveur' }, { status: 500 });
  }
}