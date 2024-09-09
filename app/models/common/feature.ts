import type {Cta} from "~/models/common/cta";

export interface Feature {
    title: string;
    content: string[];
    icon: string|null;
    cta: Cta|null;
}
