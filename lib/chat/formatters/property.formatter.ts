import { PropertyInfo } from '@/lib/types/chat';
import { formatPrice } from './price.formatter';

export function formatPropertyData(properties: PropertyInfo[]): string {
  if (!properties?.length) return '';
  
  return properties.map(property => `
Property: ${property.title}
${formatPropertyDetails(property)}
`).join('\n');
}

function formatPropertyDetails(property: PropertyInfo): string {
  const details = [
    `Location: ${property.location}`,
    `Price: ${formatPrice(property.price)}`,
    `Type: ${property.type}`,
    `Status: ${property.availability}`,
    property.bedrooms ? `Bedrooms: ${property.bedrooms}` : null,
    property.bathrooms ? `Bathrooms: ${property.bathrooms}` : null,
    property.area ? `Area: ${property.area} sq ft` : null,
    property.features?.length ? `Features: ${property.features.join(', ')}` : null
  ];

  return details
    .filter(Boolean)
    .map(detail => `  ${detail}`)
    .join('\n');
}