export interface SongObject {
    id: number;
    name: string;
    slug: string;
    bpm: number;
    lyrics: string;
    instruments: string[];
    project_id: number;
    created_at: string;
    updated_at: string;
}