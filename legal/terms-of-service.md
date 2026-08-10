# Terms of Service — ComplyLog Pro

**⚠️ DRAFT — NOT LEGAL ADVICE.** This document was drafted as a starting point based on standard SaaS Terms of Service structures. It has **not** been reviewed by a licensed attorney. Given that ComplyLog Pro is marketed as a compliance-management tool across multiple countries, you should have this reviewed by a lawyer before relying on it with paying customers — the liability and disclaimer clauses (Sections 5 and 8) are the ones that matter most for that review.

*Last updated: August 9, 2026 · Effective for all accounts created after this date.*

---

## 1. Who You're Contracting With

ComplyLog Pro ("the Service", "we", "us") is operated by **Fidel E. Martínez**, an independent individual operator, not a registered company or corporation, unless and until a separate notice updates this section to name a formal legal entity. References to "the Company" in this document mean this individual operator.

*(Update this section immediately if you incorporate a business entity — it changes who is legally responsible under this contract.)*

## 2. What the Service Is

ComplyLog Pro is a software platform for tracking compliance-related tasks, recording HACCP/quality-control measurements, generating PDF reports, and providing AI-assisted suggestions. It is a **record-keeping and task-management tool**.

## 3. Accounts

- You must provide accurate information when registering and keep your login credentials confidential.
- One company workspace per subscription plan; you're responsible for all activity of users you invite to your workspace.
- You must be legally able to enter into this agreement to use the Service.

## 4. Subscription Plans & Payment

- **Free plan**: limited to the task/user caps shown in the app at signup.
- **Paid plans (Pro / Enterprise)**: billed monthly. Accepted payment methods: credit/debit card or Apple Pay/Google Pay (processed by NOWPayments), or manual USDT transfer via CryptoBot/P2P (subject to manual verification before activation — see Section 4.1).
- **Refunds**: 14-day money-back guarantee from the date of upgrade, on request.
- **Price changes**: we'll give at least 30 days' notice before any price increase takes effect on your next billing cycle.
- **Manual crypto payments are not instant.** Submitting a transaction ID does not activate your plan automatically — it is reviewed by a human before your plan upgrades, typically within a few hours.

## 5. ⚠️ No Compliance Guarantee (Read This One Carefully)

**ComplyLog Pro is a task and record-management tool. It is NOT a substitute for professional legal, regulatory, or compliance advice, and using it does not guarantee that you will pass any inspection, audit, or regulatory review.**

Specifically:
- Checklist templates, AI-generated suggestions (including anything produced by the "AI Suggestions" feature), and any regulatory-body labels shown in the app are provided for informational convenience only and may be incomplete, outdated, or inapplicable to your specific business, location, or situation.
- You are solely responsible for verifying your actual legal and regulatory obligations with a qualified professional (attorney, compliance consultant, or the relevant government authority) in your jurisdiction.
- We do not review, verify, or take responsibility for the accuracy of user-generated custom checklists, fields, or report templates.

## 6. Acceptable Use

You agree not to:
- Use the Service for any unlawful purpose or to store/process data you don't have the right to store.
- Attempt to bypass rate limits, security controls, or access other companies' workspace data.
- Resell or white-label the Service without a separate written agreement.
- Upload malicious code or attempt to disrupt the Service's infrastructure.

## 7. Your Data

- You retain ownership of all data you enter into the Service (tasks, HACCP logs, documents, custom checklists, team member information).
- We use Row Level Security so that only your company's workspace members (and platform administrators, for support/legal purposes) can access your data.
- If you're located in the EU/EEA or process personal data of people who are, you are the "data controller" for that data under GDPR; we act as a "data processor." A separate Data Processing Addendum should be put in place before onboarding EU business customers at scale — ask if you want this drafted next.
- On account deletion, your data is removed within 30 days except where we're legally required to retain it (e.g., payment records). *(Default value — change if you decide on a different retention window.)*

## 8. Limitation of Liability

To the maximum extent permitted by law:
- The Service is provided "as is" and "as available," without warranties of any kind, express or implied.
- In no event will the Company's total liability to you for any claim arising from your use of the Service exceed the amount you paid us in the 12 months before the claim arose.
- The Company is not liable for indirect, incidental, special, or consequential damages, including lost profits, lost data, or damages arising from a failed regulatory inspection or audit.

## 9. Termination

- You may cancel your subscription at any time; it remains active until the end of the current billing period.
- We may suspend or terminate accounts that violate Section 6 (Acceptable Use), with notice where practical.

## 10. Changes to These Terms

We may update these Terms from time to time. Material changes will be notified via email or an in-app notice at least 14 days before taking effect.

## 11. Governing Law

**[PLACEHOLDER — needs a real decision, ideally with legal input.]** Until updated, this agreement is governed by the laws of **[JURISDICTION TO BE DETERMINED]**, without regard to conflict-of-law principles. Disputes will be resolved through **[arbitration / courts of ___ — TO BE DETERMINED]**.

*Note: naming a jurisdiction here is mostly about which court/arbitration body would technically hear a dispute — in practice, disputes over small SaaS subscriptions rarely reach that point. A commonly used neutral default for solo operators serving international customers is binding arbitration under a well-known international arbitration body, which avoids tying the contract to any single country's courts. Worth a short conversation with a lawyer once you're ready to finalize this section — it's the one clause in this whole document I'd least want you to leave to guesswork.*

## 12. Severability

If any provision of these Terms is found unenforceable, the remaining provisions stay in effect.

## 13. Contact

Questions about these Terms: **declarcloud@gmail.com**

## 14. Final Disclaimer — No Legal, Regulatory, or Professional Advice

However complete, accurate, or well-designed the Service may be, ComplyLog Pro is a record-keeping, task-tracking, and document-generation tool — nothing more. No report, PDF, checklist result, AI-generated suggestion, or other output produced by the Service constitutes legal, regulatory, tax, safety, or any other form of professional advice, and no attorney-client, consultant-client, or advisory relationship is created by using the Service, regardless of the quality or reliability of the Service itself.

You remain solely and entirely responsible for determining your actual compliance obligations, for independently verifying that any document, checklist, or report generated by the Service actually meets those obligations, and for obtaining independent professional advice — a licensed attorney, a qualified compliance consultant, or the relevant regulatory authority — before relying on any output of the Service in a regulatory, legal, safety, or audit-critical context. To the fullest extent permitted by law, the Company disclaims all liability for any consequence arising from reliance on any document, report, checklist, or suggestion produced through the Service, including but not limited to failed inspections or audits, regulatory fines or sanctions, product recalls, denied certifications, or legal action brought by a third party or regulator. This disclaimer applies in addition to, and does not limit, Section 5 and Section 8 above.

---

### Implementation checklist (for you, not part of the contract)
- [x] Fill in bracketed placeholders (name, date, contact email) — done 2026-08-09
- [ ] Get Section 11 (Governing Law) reviewed — still a placeholder, this is the highest-value line item to get real legal input on
- [x] Add a required "I agree to the Terms of Service" checkbox to `register()` in `index.html`, linking to this document — done
- [x] Draft a companion Privacy Policy (needed for GDPR + general good practice) — done, see `privacy-policy.md`
- [ ] Consider a lightweight liability shield (even a simple single-member LLC in a jurisdiction that doesn't require in-person presence to form) once revenue justifies the cost — happy to talk through what "simple" looks like when you're ready, in plain informational terms, not as legal advice
