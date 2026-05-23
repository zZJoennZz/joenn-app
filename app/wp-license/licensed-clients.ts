// app/theme-license/licensed-clients.ts

export interface LicensedClient {
  id: string;           // URL slug (e.g., "abc-corporation")
  legalName: string;    // Full legal business name
  domain: string;       // Authorized domain
  themeName: string;    // Theme name delivered
  licenseDate: string;  // Issue date
  status: 'active' | 'expired' | 'revoked';
  licenseKey?: string;  // Optional: extra validation key
}

export const licensedClients: LicensedClient[] = [
  {
    id: "amici-latinae",
    legalName: "Amici Latinae",
    domain: "amicilatinae.com",
    themeName: "The Roman Road",
    licenseDate: "January 15, 2026",
    status: "active",
    licenseKey: "ABC-XYZ-123"
  }
];

// Helper function to find client by ID
export function getClientById(id: string): LicensedClient | undefined {
  return licensedClients.find(client => client.id === id);
}

// Helper function to validate domain match (optional additional check)
export function validateClientDomain(client: LicensedClient, requestedDomain?: string): boolean {
  if (!requestedDomain) return true;
  // Check if the license is being viewed from an authorized domain
  const currentHost = typeof window !== 'undefined' ? window.location.hostname : '';
  return currentHost === client.domain || currentHost === `www.${client.domain}`;
}