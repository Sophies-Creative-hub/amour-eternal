import React from 'react';

export interface Package {
  id: string;
  name: string;
  price: string;
  description: string;
  features: string[];
  isPopular?: boolean;
}

export interface Testimonial {
  id: string;
  couple: string;
  date: string;
  quote: string;
  image: string;
}

export interface GalleryItem {
  id: string;
  src: string;
  category: string;
  alt: string;
}

export interface TimelineEvent {
  id: string;
  time: string;
  title: string;
  description: string;
  icon?: React.ReactNode;
}

export enum PlannerMode {
  VOWS = 'VOWS',
  TIMELINE = 'TIMELINE',
  TIPS = 'TIPS'
}