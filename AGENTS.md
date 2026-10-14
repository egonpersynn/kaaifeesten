# Frontend conventions
- The root route opens the Kaaifeesten homepage; legacy event-entry URLs redirect home so old links remain valid without a choice screen.
- Use shared photo banners and semantic theme tokens across event and information pages to keep the visual identity consistent.
- Keep reference-wide presentation refinements in the shared global stylesheet with page-level classes, so all public pages retain one coherent visual system.
- Loading is a brief introductory animation, not a measurement of network progress.
- The header registration CTA links to the market registration anchor and its existing email signup, so navigation does not imply a confirmed reservation.
- Uploaded edition photos are imported through CDN asset pointers, keeping full-resolution media outside the repository.