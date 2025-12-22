# HCS-U7 Investor Pitch Deck

---

## Slide 1 — Title

# HCS-U7

### Human Cognitive Signature

**Cognitive authentication for the post-AI threat landscape.**

*IA SOLUTION — France*

---

## Slide 2 — The Problem

### Authentication and Anti-Bot Defenses Are Failing

- **CAPTCHA is solved**: AI models and CAPTCHA-farming services defeat visual challenges in real-time. Completion rates by bots now exceed 95%.

- **MFA is intercepted**: Phishing toolkits (EvilProxy, Modlishka) relay OTP codes live, rendering SMS and TOTP ineffective against targeted attacks.

- **Device fingerprinting is spoofed**: Headless browsers and anti-detect tools fabricate consistent fingerprints indistinguishable from legitimate users.

- **Behavioral biometrics plateau**: Mouse movements and keystroke dynamics can be replayed or synthesized by modern automation frameworks.

**Result**: Fraud losses, compliance failures, and eroding trust in digital identity.

---

## Slide 3 — Why Now

### The Threat Model Has Changed

- **AI agents are production-ready**: LLMs and autonomous agents can navigate forms, solve challenges, and mimic human interaction patterns at scale.

- **Attack economics favor automation**: One script replaces thousands of manual fraudsters. Cost per attack trends toward zero.

- **Regulatory pressure intensifies**: PSD2 SCA, DORA, and emerging AI regulations demand stronger authentication and auditability. Fines for non-compliance are material.

- **Existing defenses offer diminishing returns**: Each incremental improvement in CAPTCHA or fingerprinting is matched by adversarial tooling within months.

**Window of opportunity**: Enterprises need a new authentication primitive before AI agents become indistinguishable from humans on technical signals alone.

---

## Slide 4 — Core Insight

### Cognition Is the Last Human Signal

- **Technical signals can be faked**: IP, device, cookies, and even behavioral patterns are replicable by sufficiently motivated adversaries.

- **Cognitive performance cannot be reliably synthesized**: Tasks requiring working memory, attention switching, inhibition control, and real-time linguistic processing expose fundamental computational constraints in AI.

- **Humans exhibit measurable variance**: Fatigue effects, hesitation patterns, and inter-item timing reflect genuine cognitive load — not scriptable patterns.

- **Privacy-preserving measurement is possible**: Cognitive signals can be captured as timing metrics without storing sensitive biometric data.

**Insight**: If you can verify cognition, you can verify humanity — without trusting the client, the network, or the device.

---

## Slide 5 — The Solution

### HCS-U7: Cognitive Authentication Engine

HCS-U7 is a backend authentication service that verifies human presence through cognitive challenge-response, cryptographic signature validation, and multi-signal risk analysis. It generates a tamper-evident cognitive signature that can be integrated into any authentication or transaction flow.

**How it works:**

- User completes 6 cognitive tests (Stroop, N-Back, Trail Making, Digit Span, Reaction Time, RAN Vocal)
- System generates dual-signed HCS code (HMAC-SHA256 + BLAKE3)
- Verification in 150ms constant-time (timing-safe)
- 9-layer cognitive firewall combines signals into Allow / Challenge / Deny decision
- Immutable audit trail (HMAC-chained logs)

**Integration**: REST API, drop-in for existing auth stacks, PSD2 SCA-compliant.

---

## Slide 6 — Why It's Different

### Comparison to Existing Approaches

| Signal | CAPTCHA | Device FP | Biometrics | HCS-U7 |
|--------|---------|-----------|------------|--------|
| AI-resistant | No | No | Partial | Yes |
| Replay-safe | No | No | Partial | Yes |
| Privacy-preserving | Yes | No | No | Yes |
| Auditable | No | No | Partial | Yes |
| No client trust | No | No | No | Yes |

**Key differentiators:**

- **Timing-safe verification**: 150ms latency floor prevents timing side-channels
- **Multi-instance replay protection**: Redis-atomic one-time-use semantics
- **No biometric storage**: Only timing metrics retained, no audio/video
- **Cryptographic enforcement**: Dual signatures, key separation, HKDF derivation

---

## Slide 7 — Technical Credibility

### Enterprise-Grade Security Architecture

- **Timing-safe verification**: Constant-time comparison, 150ms latency floor, fake computation load to eliminate timing oracles

- **Multi-instance replay protection**: Redis-atomic SET NX EX, fail-closed under degradation, per-endpoint class policies

- **Key separation and crypto-core**: KeyRing with HKDF-SHA256 derivation, 7 purpose-bound keys, strict secret isolation (QSIG and B3 use different source secrets)

- **Admin surface protection**: X-ADMIN-KEY with timing-safe comparison, uniform error responses, no information leakage

- **Audit trail**: HMAC-chained immutable logs (blockchain-like integrity)

- **Compliance-ready**: FIPS 140-3 Level 1 architecture, ISO 27001 control mapping (97.8%), PSD2 SCA engine with TRA exemptions

---

## Slide 8 — Use Cases

### Where HCS-U7 Fits

**Fintech / Payments**
- Step-up authentication for high-value transactions
- PSD2 SCA compliance with Transaction Risk Analysis
- Account takeover prevention at login

**API & SaaS Abuse Protection**
- Distinguish human developers from credential-stuffing bots
- Protect trial signups from abuse
- Rate-limit bypass prevention

**High-Risk Authentication**
- Privileged access verification (admin panels, sensitive operations)
- Re-authentication for session elevation
- Fraud investigation workflows

**Regulated Industries**
- Healthcare portals (HIPAA technical safeguards)
- Government services (identity proofing)
- Financial services (AML/KYC checkpoints)

---

## Slide 9 — Business Model

### Go-to-Market

**Deployment options:**
- SaaS (usage-based pricing per verification)
- Enterprise license (annual, unlimited verifications)
- On-premise / private cloud (regulated sectors)

**Why buyers already have budget:**
- CAPTCHA vendors (replacement budget exists)
- Fraud prevention tools (consolidation opportunity)
- Authentication / IAM platforms (add-on module)
- Compliance mandates (PSD2 SCA, DORA) create forcing functions

**Sales motion:**
- Land with security/fraud teams via proof-of-concept
- Expand to enterprise license post-validation
- Compliance-driven urgency shortens sales cycles

---

## Slide 10 — Defensibility

### Why This Is Hard to Replicate

- **Architectural complexity**: 9-layer firewall, dual cryptographic signatures, timing-safe pipeline, HKDF key derivation — not a feature toggle

- **Compliance moat**: FIPS 140-3 Level 1 ready, ISO 27001 mapped, PSD2 SCA compliant. Documentation, threat models, and audit artifacts already prepared.

- **Switching costs**: Once integrated into auth flow and compliance posture, replacement requires re-certification and re-integration

- **Patent protection**: FR2514274, FR2514546 cover core cognitive signature methods

- **Operational know-how**: Timing-safe engineering, side-channel testing, and adversary modeling are specialized disciplines

---

## Slide 11 — Traction & Readiness

### Product Maturity

**Testing & Quality:**
- 600+ tests passed
- 94% code coverage
- 4 E2E security test suites (Playwright)
- Load tested: 500+ RPS sustained, <160ms p99

**Security Hardening:**
- Side-channel timing analysis (p-value verified)
- Fuzzing suite (10k+ iterations on crypto modules)
- STRIDE threat model (16 threats analyzed)
- 5 adversary profiles (Script Kiddie to APT)

**Documentation:**
- Compliance matrix (FIPS/ISO/PSD2/GDPR)
- Audit readiness checklist
- Evidence collection guide for auditors
- Runbooks, disaster recovery, secret rotation procedures

**Status**: Production-ready backend. Frontend SDK and multi-tenant isolation in progress.

---

## Slide 12 — The Ask

### Seed Round

**Raising**: [Amount TBD by founder]

**Use of funds:**

- **Product**: Frontend SDK, multi-tenant isolation, HSM integration, post-quantum readiness
- **Go-to-market**: First enterprise customers in fintech and regulated SaaS
- **Compliance**: SOC 2 Type II audit, formal ISO 27001 certification
- **Team**: Senior security engineer, enterprise sales lead

**Milestones (12-18 months):**
- 3-5 paying enterprise customers
- SOC 2 Type II certified
- 10,000+ RPS capacity
- Series A ready

---

*HCS-U7 — Cognitive authentication for the post-AI threat landscape.*

**Contact**: partnerships@ia-solution.fr

**Patents**: FR2514274 | FR2514546

---
