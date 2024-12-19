import { PropertyInfo } from '@/lib/types/chat';
import { formatPrice } from './price';

export function formatPropertyData(properties: PropertyInfo[]): string {
  return properties.map(property => `
- ${property.title}
  Location: ${property.location}
  Price: ${formatPrice(property.price)}
  Type: ${property.type}
  Status: ${property.availability}
  Features: ${property.features.join(', ')}
`).join('\n');
}