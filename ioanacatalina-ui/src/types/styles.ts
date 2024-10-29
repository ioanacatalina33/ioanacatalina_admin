export interface Offset {
    top?: number;
    bottom?: number;
    left?: number;
    right?: number;
}

export interface StyleOffset extends Offset {
    x?: number;
    y?: number;
    all?: number;
    custom?: number | string;
}

export type StyleOffsets = StyleOffset | false;

export interface SpacingOffsets {
    marginOffset?: StyleOffsets;
    paddingOffset?: StyleOffsets;
}
