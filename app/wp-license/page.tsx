// app/theme-license/page.tsx
// This works with: /theme-license?client=abc-corporation

'use client';

import { useEffect, useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Head from 'next/head';
import { licensedClients, getClientById, type LicensedClient } from './licensed-clients';
import { Suspense } from 'react';

// Inner component that uses useSearchParams (needs Suspense)
function LicenseContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const clientId = searchParams.get('client');
  const [client, setClient] = useState<LicensedClient | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [verified, setVerified] = useState(false);

  useEffect(() => {
    // Validate client exists
    if (!clientId) {
      setError('NO CLIENT SPECIFIED');
      setLoading(false);
      return;
    }

    const foundClient = getClientById(clientId);
    
    if (!foundClient) {
      setError('CLIENT NOT FOUND IN LICENSE DATABASE');
      setLoading(false);
      return;
    }

    if (foundClient.status !== 'active') {
      setError(`LICENSE STATUS: ${foundClient.status.toUpperCase()}`);
      setLoading(false);
      return;
    }

    // Optional: Domain validation (check if viewing from authorized domain)
    const currentHost = window.location.hostname;
    const isLocalhost = currentHost === 'localhost' || currentHost === '127.0.0.1';
    
    if (!isLocalhost && currentHost !== foundClient.domain && currentHost !== `www.${foundClient.domain}`) {
      setError(`UNAUTHORIZED DOMAIN\nThis license is only valid for ${foundClient.domain}`);
      setLoading(false);
      return;
    }

    setClient(foundClient);
    setVerified(true);
    setLoading(false);
  }, [clientId]);

  if (loading) {
    return (
      <div style={styles.loadingContainer}>
        <div style={styles.terminalSpinner}>
          <span style={styles.blinkingCursor}>⧗</span> VERIFYING LICENSE CREDENTIALS...
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div style={styles.errorContainer}>
        <div style={styles.errorBox}>
          <div style={styles.errorIcon}>⚠</div>
          <div style={styles.errorCode}>ACCESS DENIED</div>
          <div style={styles.errorMessage}>{error}</div>
          <div style={styles.errorHelp}>
            ─────────────────────────────
            <br />
            If you believe this is an error, please contact:<br />
            <span style={{ color: '#00ff88' }}>fullstack@joenn.dev</span>
            <br /><br />
            <button onClick={() => window.history.back()} style={styles.backButton}>
              ← RETURN
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (!client) return null;

  return (
    <>
      <Head>
        <title>License | {client.themeName} for {client.legalName}</title>
        <meta name="robots" content="noindex, nofollow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <style>{`
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body {
          background: linear-gradient(135deg, #0a0a0f 0%, #0f0f1a 100%);
          font-family: 'JetBrains Mono', 'SF Mono', 'Fira Code', monospace;
          color: #e2e2e8;
          line-height: 1.6;
          padding: 2rem;
          min-height: 100vh;
        }
        .license-container {
          max-width: 1000px;
          margin: 0 auto;
          background: #0a0a0f;
          border: 1px solid #1e293b;
          border-radius: 1rem;
          overflow: hidden;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
        }
        .terminal-bar {
          background: #0f172a;
          padding: 0.75rem 1.5rem;
          border-bottom: 1px solid #1e293b;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 0.5rem;
        }
        .terminal-dots { display: flex; gap: 0.5rem; }
        .dot { width: 12px; height: 12px; border-radius: 50%; }
        .dot-red { background: #ff5f56; }
        .dot-yellow { background: #ffbd2e; }
        .dot-green { background: #27c93f; }
        .terminal-path { font-size: 0.7rem; color: #00ff88; font-family: monospace; }
        .terminal-status { font-size: 0.7rem; color: #00ff88; animation: pulse 2s infinite; }
        @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.5; } }
        .license-content { padding: 2rem; }
        .license-header { text-align: center; margin-bottom: 2rem; padding-bottom: 1.5rem; border-bottom: 2px solid #00ff88; }
        .license-header h1 { font-size: 1.8rem; letter-spacing: -0.02em; margin-bottom: 0.5rem; }
        .license-header h1 span { color: #00ff88; }
        .license-header .subtitle { color: #64748b; font-size: 0.8rem; }
        .license-badge { display: inline-block; background: rgba(0, 255, 136, 0.1); border: 1px solid #00ff88; color: #00ff88; padding: 0.25rem 0.75rem; border-radius: 2rem; font-size: 0.7rem; margin-top: 0.75rem; font-weight: 600; }
        .client-info { background: rgba(0, 255, 136, 0.05); border-left: 4px solid #00ff88; padding: 1.25rem; margin-bottom: 2rem; border-radius: 0.5rem; }
        .client-info p { margin: 0.25rem 0; font-size: 0.85rem; }
        .client-info .label { color: #00ff88; font-weight: 600; }
        .license-section { margin-bottom: 1.75rem; }
        .license-section h2 { font-size: 1rem; font-weight: 700; color: #00ff88; margin-bottom: 0.75rem; border-left: 2px solid #00ff88; padding-left: 0.75rem; }
        .license-section p, .license-section li { font-size: 0.8rem; color: #cbd5e1; margin-bottom: 0.5rem; }
        .license-section ul { padding-left: 1.5rem; list-style: none; }
        .license-section li { position: relative; padding-left: 1.25rem; }
        .license-section li::before { content: "›"; position: absolute; left: 0; color: #00ff88; }
        .prohibited li::before { content: "✗"; color: #ef4444; }
        .permitted li::before { content: "✓"; color: #00ff88; }
        .notice-box { background: #0f172a; border: 1px solid #1e293b; border-radius: 0.5rem; padding: 1rem; margin: 1rem 0; font-size: 0.75rem; font-family: monospace; overflow-x: auto; }
        .warning-box { background: rgba(239, 68, 68, 0.1); border-left: 4px solid #ef4444; padding: 1rem; margin: 1rem 0; border-radius: 0.5rem; }
        .signature-section { margin-top: 2rem; padding-top: 1.5rem; border-top: 1px dashed #1e293b; display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; }
        .signature-box { text-align: center; }
        .signature-line { border-bottom: 1px solid #334155; margin: 0.75rem 0; padding-top: 1.5rem; }
        .signature-label { font-size: 0.7rem; color: #64748b; }
        .license-footer { background: #050508; padding: 1rem 2rem; text-align: center; border-top: 1px solid #1e293b; font-size: 0.7rem; color: #475569; }
        hr { border-color: #1e293b; margin: 1.5rem 0; }
        .verification-stamp { position: absolute; opacity: 0.1; font-size: 8rem; right: 1rem; bottom: 1rem; pointer-events: none; transform: rotate(-15deg); }
        @media (max-width: 640px) {
          body { padding: 1rem; }
          .license-content { padding: 1rem; }
          .signature-section { grid-template-columns: 1fr; }
        }
      `}</style>

      <div className="license-container">
        <div className="terminal-bar">
          <div className="terminal-dots">
            <div className="dot dot-red"></div>
            <div className="dot dot-yellow"></div>
            <div className="dot dot-green"></div>
          </div>
          <div className="terminal-path">
            ~/license/{client.id}/current
          </div>
          <div className="terminal-status">
            ● VERIFIED | {client.status.toUpperCase()}
          </div>
        </div>

        <div className="license-content" style={{ position: 'relative' }}>
          <div className="verification-stamp">✓ VERIFIED</div>
          
          <div className="license-header">
            <h1>
              <span>⎧ PROPRIETARY LICENSE ⎫</span>
            </h1>
            <div className="subtitle">
              WordPress Theme • Single Entity • Non-Transferable
            </div>
            <div className="license-badge">
              🔒 END BUSINESS USER LICENSE | ID: {client.id}
            </div>
          </div>

          <div className="client-info">
            <p><span className="label">LICENSEE:</span> {client.legalName}</p>
            <p><span className="label">AUTHORIZED DOMAIN:</span> {client.domain}</p>
            <p><span className="label">THEME:</span> {client.themeName}</p>
            <p><span className="label">ISSUED:</span> {client.licenseDate}</p>
            <p><span className="label">LICENSE ID:</span> {client.id}</p>
            <p><span className="label">LICENSOR:</span> JOENN S. AQUILINO (fullstack@joenn.dev)</p>
          </div>

          <div className="license-section">
            <h2>§1 – GRANT OF LICENSE</h2>
            <p>
              JOENN S. AQUILINO ("Licensor") hereby grants {client.legalName} ("Licensee") 
              a non-exclusive, non-transferable, non-sublicensable, perpetual license to use this WordPress 
              Theme ("The Software") exclusively on the Authorized Domain: <strong>{client.domain}</strong>.
            </p>
            <p>
              This license is issued to Licensee as a single business entity and <strong>shall not extend</strong> 
              to subsidiaries, parent companies, affiliates, partners, contractors, or any third-party organizations.
            </p>
          </div>

          <div className="license-section">
            <h2>§2 – PERMITTED OPERATIONS</h2>
            <ul className="permitted">
              <li>Install The Software on ONE (1) WordPress installation at {client.domain}</li>
              <li>Modify source code solely for Licensee's own website appearance or functionality</li>
              <li>Create ONE (1) backup copy for disaster recovery purposes only</li>
              <li>Employ internal staff to maintain or modify The Software for Licensee's exclusive use</li>
            </ul>
          </div>

          <div className="license-section">
            <h2>§3 – PROHIBITED OPERATIONS</h2>
            <ul className="prohibited">
              <li>Install or use The Software on any domain other than {client.domain}</li>
              <li>Transfer, sell, rent, lease, sublicense, distribute, or share The Software or any derivative work</li>
              <li>Use The Software to provide development services or website building for any third party</li>
              <li>Remove, obscure, or alter any copyright or proprietary notices embedded in The Software</li>
              <li>Decompile, reverse engineer, or attempt to extract source code beyond permitted modifications</li>
              <li>Use The Software on a WordPress Multisite Network without purchasing additional licenses per sub-site</li>
              <li>Repackage, rename, or redistribute The Software as a new or derivative theme</li>
            </ul>
          </div>

          <div className="license-section">
            <h2>§4 – INTELLECTUAL PROPERTY</h2>
            <p>
              The Software remains the exclusive intellectual property of JOENN S. AQUILINO. 
              Licensee owns modifications created exclusively for the Authorized Domain, but such modifications 
              may not be distributed, used on other domains, or sold independently.
            </p>
            <div className="notice-box">
              {`/* LICENSE: ${client.id} - ${client.legalName} */`}<br />
              {`/* UNAUTHORIZED DISTRIBUTION CONSTITUTES COPYRIGHT INFRINGEMENT */`}<br />
              {`/* Violations may result in legal action under Philippine law */`}
            </div>
          </div>

          <div className="license-section">
            <h2>§5 – SCOPE & TRANSFER</h2>
            <p>
              In the event of acquisition, merger, sale of assets, change of controlling ownership, or bankruptcy, 
              <strong> this license does NOT automatically transfer</strong>. Licensee must obtain explicit written 
              consent from Licensor prior to any transfer.
            </p>
          </div>

          <div className="license-section">
            <h2>§6 – TERMINATION PROTOCOL</h2>
            <p>
              This license terminates automatically without notice if Licensee violates any provision of Section 3. 
              Upon termination, Licensee must delete all copies of The Software within five (5) business days and 
              provide written certification of deletion.
            </p>
          </div>

          <div className="warning-box">
            <strong>⚠ DISCLAIMER OF WARRANTIES</strong><br /><br />
            THE SOFTWARE IS PROVIDED "AS IS" WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, 
            INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, 
            OR NON-INFRINGEMENT. LICENSOR DOES NOT WARRANT THAT THE SOFTWARE WILL MEET LICENSEE'S 
            REQUIREMENTS OR THAT OPERATION WILL BE SECURE OR ERROR-FREE.
          </div>

          <div className="license-section">
            <h2>§7 – LIMITATION OF LIABILITY</h2>
            <p>
              IN NO EVENT SHALL LICENSOR BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, 
              OR CONSEQUENTIAL DAMAGES, INCLUDING LOSS OF PROFITS, DATA, OR BUSINESS INTERRUPTION, ARISING 
              FROM THE USE OR INABILITY TO USE THE SOFTWARE.
            </p>
          </div>

          <div className="license-section">
            <h2>§8 – GOVERNING LAW</h2>
            <p>
              This license shall be governed by the laws of the Republic of the Philippines. Any disputes 
              shall be subject to the exclusive jurisdiction of the courts of Bulacan, Philippines.
            </p>
          </div>

          <div className="signature-section">
            <div className="signature-box">
              <div className="signature-line"></div>
              <div className="signature-label">
                JOENN S. AQUILINO<br />
                Licensor / Full Stack Developer
              </div>
            </div>
            <div className="signature-box">
              <div className="signature-line"></div>
              <div className="signature-label">
                {client.legalName}<br />
                Authorized Representative
              </div>
            </div>
          </div>

          <hr />

          <div className="notice-box">
            <strong>✓ LICENSE VERIFIED</strong><br />
            By installing, accessing, or using The Software, Licensee acknowledges that they have read, 
            understood, and agree to be bound by the terms of this license.<br /><br />
            <span style={{ fontSize: '0.7rem', color: '#64748b' }}>
              This license was issued exclusively for {client.legalName} ({client.domain})<br />
              License ID: {client.id} | Timestamp: {new Date().toISOString()}
            </span>
          </div>
        </div>

        <div className="license-footer">
          <p>© {new Date().getFullYear()} JOENN S. AQUILINO | SYSTEM.LOG // License v1.0</p>
          <p style={{ marginTop: '0.25rem' }}>San Rafael, Bulacan, Philippines</p>
        </div>
      </div>
    </>
  );
}

// Loading fallback for Suspense
function LoadingFallback() {
  return (
    <div style={styles.loadingContainer}>
      <div style={styles.terminalSpinner}>
        <span style={styles.blinkingCursor}>⧗</span> LOADING LICENSE PORTAL...
      </div>
    </div>
  );
}

// Main page component with Suspense
export default function ThemeLicensePage() {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <LicenseContent />
    </Suspense>
  );
}

// Styles for loading/error states
const styles = {
  loadingContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #0a0a0f 0%, #0f0f1a 100%)',
    fontFamily: "'JetBrains Mono', monospace",
  },
  terminalSpinner: {
    color: '#00ff88',
    fontSize: '0.9rem',
    letterSpacing: '2px',
  },
  blinkingCursor: {
    animation: 'pulse 1s infinite',
  },
  errorContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #0a0a0f 0%, #0f0f1a 100%)',
    fontFamily: "'JetBrains Mono', monospace",
  },
  errorBox: {
    background: '#0a0a0f',
    border: '1px solid #ef4444',
    borderRadius: '1rem',
    padding: '2rem',
    maxWidth: '500px',
    textAlign: 'center' as const,
  },
  errorIcon: {
    fontSize: '3rem',
    marginBottom: '1rem',
  },
  errorCode: {
    color: '#ef4444',
    fontSize: '1.2rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
  },
  errorMessage: {
    color: '#94a3b8',
    fontSize: '0.85rem',
    marginBottom: '1.5rem',
    whiteSpace: 'pre-line' as const,
  },
  errorHelp: {
    color: '#64748b',
    fontSize: '0.75rem',
    borderTop: '1px solid #1e293b',
    paddingTop: '1rem',
  },
  backButton: {
    background: '#1e293b',
    border: 'none',
    color: '#e2e2e8',
    padding: '0.5rem 1rem',
    borderRadius: '0.5rem',
    fontFamily: 'monospace',
    cursor: 'pointer',
    marginTop: '0.5rem',
  },
};