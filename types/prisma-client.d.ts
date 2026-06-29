declare module '@prisma/client' {
  export const Prisma: any;
  export class PrismaClient {
    constructor(...args: any[]);
    $connect(): Promise<void>;
    $disconnect(): Promise<void>;
    $on(event: string, callback: (...args: any[]) => void): void;
    $use(callback: (params: any, next: (params: any) => Promise<any>) => Promise<any>): void;
  }
}
