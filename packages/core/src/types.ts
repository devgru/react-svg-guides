import type { HTMLAttributes, Ref, RefObject, SVGAttributes } from 'react';

export type NullableRefObject<E> = RefObject<E | null>;

export type RefObjectWithSize<E> = NullableRefObject<E> & {
  size: Size | undefined;
};

export type RefObjectWithBox<E> =
  | RefObjectWithFilledBox<E>
  | RefObjectWithEmptyBox<E>;

export type RefObjectWithFilledBox<E> = NullableRefObject<E> & {
  box: Box;
  size: Size;
};

export type RefObjectWithEmptyBox<E> = NullableRefObject<E> & {
  box: undefined;
  size: undefined;
};

export type RefObjectWithAnchor<E> = NullableRefObject<E> & {
  anchor?: Anchor;
};

export type RefObjectWithGuide<E> = NullableRefObject<E> & {
  guide?: number | undefined;
};

export interface HtmlWrapperProps
  extends Omit<SVGAttributes<SVGForeignObjectElement>, 'height'> {
  ref?: Ref<HTMLDivElement>;
  width: number | string;
}

export interface HtmlOriginProps extends HTMLAttributes<HTMLDivElement> {
  ref?: Ref<HTMLDivElement>;
}

export interface SvgOriginProps extends SVGAttributes<SVGSVGElement> {
  ref?: Ref<SVGSVGElement>;
}

export interface Size {
  width: number;
  height: number;
}

export interface Box {
  left: number;
  horizontalCenter: number;
  right: number;
  top: number;
  verticalCenter: number;
  bottom: number;
}

interface XY {
  x: number;
  y: number;
}

export type Anchor = XY;

export type HorizontalAttachment = 'left' | 'center' | 'right';

export type VerticalAttachment = 'top' | 'center' | 'bottom';

export type GuideAttachment = keyof Box;

export type Origin = XY;

export type SizeSetter = (width: number, height: number) => void;

export type SizeObserver = {
  width: number | undefined;
  height: number | undefined;
  setSize: SizeSetter;
};

export type SVGOrHTMLElement = SVGElement | HTMLElement;
