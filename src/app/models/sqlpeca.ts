export class PecaSql {
    nid: number;
    notas: string;
    guardado: number;

    constructor(nid: number, notas?: string, guardado?: number) {
        this.setNid(nid);
        this.setNotas(notas);
        this.setGuardado(guardado);
    }

    public setNid(nid: number) {
        this.nid = nid;
    }
    public setNotas(notas: string) {
        this.notas = notas;
    }
    public setGuardado(guardado: number) {
        this.guardado = guardado;
    }

    public getNid() {
        return this.nid;
    }
    public getNotas() {
        return this.notas;
    }
    public getGuardado() {
        return this.guardado;
    }
}
