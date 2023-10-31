



export interface PostResponse {
    ok:      boolean;
    visitas: Visita[];
}

export interface Visita {
    id:             string;
    title:          string;
    descripcion:    string | null;
    userComentario: string[];
    comentarios:    string[];
    createdAt:      Date;
    images:         string[];
}

