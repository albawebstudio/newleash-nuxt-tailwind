import type { Image } from './common'

export interface Success {
    title:   string;
    content: string[];
    stories: Story[];
}

export interface Story {
    title:   string;
    content: string[];
    image:   Image;
}

