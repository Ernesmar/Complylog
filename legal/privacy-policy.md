# Privacy Policy — ComplyLog Pro

**⚠️ DRAFT — NOT LEGAL ADVICE.** Companion document to `terms-of-service.md`, same caveat applies: this is a solid starting point, not attorney-reviewed. Section 7 (GDPR) matters most if you're marketing to EU customers — get that one checked before you actively sell there.

*Last updated: August 9, 2026*

---

## 1. Who Controls Your Data

ComplyLog Pro is operated by **Fidel E. Martínez** (see `terms-of-service.md` §1 for the current operator status). For data protection purposes, this entity/individual is the "data controller" of account-level data, and each company workspace's owner is the "data controller" of the data they and their team enter (tasks, HACCP logs, documents) — we act as the "data processor" for that content. See §7.

## 2. What We Collect

| Category | Examples | Why |
|---|---|---|
| Account data | Email, hashed password (or Google OAuth identity), full name | Authentication, account recovery |
| Company data | Company name, industry, country, plan | Personalizing the product, applying the right plan limits |
| Content you create | Tasks, HACCP logs, custom checklists and entries, documents, notes | The actual product — this is your data |
| Team data | Team members' emails, roles, invitation status | Team collaboration features |
| Payment data | Plan, amount, payment status, provider transaction IDs | **We never see or store your card/wallet details directly** — card payments are processed by NOWPayments, and manual crypto payments only store a transaction hash you provide, not your wallet's private keys |
| Usage data | AI feature call counts, login timestamps | Rate limiting, security, product improvement |

## 3. What We Don't Collect

- We don't collect card numbers, CVVs, or bank account details — those go straight to NOWPayments, never through our servers.
- We don't track you across other websites or sell data to advertisers.
- We don't require phone numbers, government ID, or biometric data.

## 4. How We Use It

- To provide the Service (store your tasks, generate your PDFs, run AI suggestions).
- To send you transactional emails (task deadline reminders, payment confirmations, team invitations) — never marketing email without a separate opt-in.
- To enforce plan limits and prevent abuse (e.g., the AI rate limit).
- To detect and respond to security incidents.

## 5. Who We Share It With (Sub-processors)

| Sub-processor | Purpose |
|---|---|
| Supabase (database, auth, file storage, Edge Functions) | Core infrastructure — hosts all your data |
| DeepSeek | Processes the text you send to "AI Suggestions" — receives only the specific prompt/deviation data for that request, not your whole account |
| Resend | Sends transactional emails (reminders, invitations, payment confirmations) |
| NOWPayments | Processes card/Apple Pay/Google Pay subscription payments |

We don't sell your data to anyone, and we don't share it with third parties beyond what's needed to run the Service, except when required by law.

## 6. Data Retention & Deletion

- Your data stays as long as your account is active.
- On account deletion, we remove your data within 30 days, except records we're legally required to keep (e.g., payment history for tax/accounting purposes). *(Default value — change if you decide on a different retention window; must match `terms-of-service.md` §7.)*
- You can request a copy of your data or its deletion at any time by emailing **declarcloud@gmail.com**.

## 7. GDPR (If You're in the EU/EEA, or Serve People Who Are)

- **Legal basis for processing**: contract performance (running the Service you signed up for) and legitimate interest (security, fraud prevention).
- **Your rights**: access, rectification, erasure, portability, and objection to processing. Contact us to exercise any of these.
- **International transfers**: Supabase infrastructure for this project runs in the US (region: us-east-1). If you're in the EU, this means your data is transferred outside the EEA — Supabase's own data processing terms cover the relevant safeguards (standard contractual clauses); worth linking their DPA here once you review it.
- **We do not currently have a Data Protection Officer** — for a solo operator this usually isn't required, but confirm based on your actual EU sales volume.

## 8. Cookies

`index.html` uses `localStorage` for language preference and cookie-consent acknowledgment — no third-party tracking cookies, no ad pixels.

## 9. Children

The Service is not directed at anyone under 18. We don't knowingly collect data from minors.

## 10. Security

- Row Level Security (RLS) on every database table — your company's data is isolated from every other company's, enforced at the database level, not just in application code.
- Service-role credentials (which bypass RLS) are only used server-side in Edge Functions, never exposed to the browser.
- Passwords are hashed by Supabase Auth — we never see or store plaintext passwords.

No system is perfectly secure — if we discover a breach affecting your data, we'll notify affected users within a reasonable timeframe (GDPR requires 72 hours to the relevant authority, if applicable).

## 11. Changes to This Policy

We'll update this page and notify you (email or in-app) of material changes at least 14 days before they take effect.

## 12. Contact

Questions or data requests: **declarcloud@gmail.com**

## 13. No Legal or Professional Advice

Nothing in this Privacy Policy, nor any document, report, or output generated by the Service, constitutes legal, regulatory, or professional advice regarding your data-protection obligations. If you process personal data at meaningful scale (including under GDPR, CCPA, or similar regimes), you are responsible for independently confirming your own compliance obligations as a data controller with qualified counsel — our role as a data processor for your workspace content (§1, §7) does not shift that responsibility to us.

---

### Implementation checklist (for you, not part of the policy)
- [x] Fill in bracketed placeholders (name, date, contact email) — done 2026-08-09
- [ ] Review §7 (GDPR) before actively marketing to EU customers
- [x] Link this + `terms-of-service.md` from the registration checkbox — done
- [ ] Once you pick a production host, update §7's mention of "us-east-1" if you ever migrate regions
