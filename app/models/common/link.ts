export interface Link {
    title:    string;
    to:       string;
    external: boolean;
    children: Link[];
}
