import { Guide } from './types.ts';

export const ROOT_RECT_MAP = new WeakMap<Element, SVGRect>();
export const HORIZONTAL_GUIDES_MAP = new WeakMap<Element, Set<Guide>>();
export const VERTICAL_GUIDES_MAP = new WeakMap<Element, Set<Guide>>();

export const ardov =
  'data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD/4gKMSUNDX1BST0ZJTEUAAQEAAAJ8AAAAAARAAABtbnRyUkdCIFhZWiAAAAAAAAAAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAApkZXNjAAAA/AAAAFxyWFlaAAABWAAAABRnWFlaAAABbAAAABRiWFlaAAABgAAAABR3dHB0AAABlAAAABRyVFJDAAABqAAAAIxnVFJDAAABqAAAAIxiVFJDAAABqAAAAIxjaWNwAAACNAAAAAxjcHJ0AAACQAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAD4AAAAcAFIAZQBjADIAMAAyADAAIABHAGEAbQB1AHQAIAB3AGkAdABoACAASABMAEcAIABUAHIAYQBuAHMAZgBlAHIAAFhZWiAAAAAAAACsaAAAR2////+BWFlaIAAAAAAAACppAACs4wAAB61YWVogAAAAAAAAIAcAAAuuAADME1hZWiAAAAAAAAD21gABAAAAANMtY3VydgAAAAAAAABAAAAADQAuAF8AoQDxAVABvAI2Ar0DUgPyBKAFWQYeBvAHzQi1CaoKqQu0DMoN7A8XEE4RkBLcFDMVlBcAGHYZ+BuGHTMfBiEAIyYlfCgFKsUtwTD/NIM4VTx5QPhF2EsjUOBXGl3bZS9tIHW+fxeJOpQ4oCKtD7sTykXawOyg//9jaWNwAAAAAAkSAAFtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb//gAPTGF2YzYwLjMuMTAwAP/bAEMACAQEBAQEBQUFBQUFBgYGBgYGBgYGBgYGBgcHBwgICAcHBwYGBwcICAgICQkJCAgICAkJCgoKDAwLCw4ODhERFP/EAEwAAQEAAAAAAAAAAAAAAAAAAAAFAQEBAAAAAAAAAAAAAAAAAAAABBABAAAAAAAAAAAAAAAAAAAAABEBAAAAAAAAAAAAAAAAAAAAAP/AABEIAAEAAQMBEgACEgADEgD/2gAMAwEAAhEDEQA/AKQjFA//2Q==';
