# Accessibility and PageSpeed Summary

The before-and-after PageSpeed scores were: Accessibility 100 to 100, Performance 100 to 100, Best Practices 96 to 100, and SEO 91 to 100. Accessibility and Performance remained at 100; Best Practices and SEO each improved to 100. The changes below improve accessibility and usability, while some related fixes address performance or SEO. This summary is not a formal WCAG conformance audit.

## Changes Made

- Kept the page's English language declaration, semantic landmarks, heading structure, and native navigation links, which support assistive technology and keyboard navigation.
- Replaced the generic page title with `Caleb Breton | Student Portfolio` so the page is identifiable in browser tabs and other contexts.
- Updated the portrait's alternative text to `Caleb Breton dressed as Scooby-Doo`, describing the image's subject and appearance.
- Added intrinsic `width` and `height` attributes to the portrait. This lets the browser reserve its space before loading and addresses the image-related layout shift in the report.
- Replaced the 24 MB PNG used by the page with a 320 x 480 WebP of about 16 KB, improving image delivery while retaining the original file.
- Added a `prefers-reduced-motion` rule to disable smooth scrolling and link transitions for visitors who request reduced motion.
- Added a meta description for search snippets. This is an SEO improvement, not an accessibility-score fix.

## PageSpeed Notes

- The report also flagged the small external stylesheet as render-blocking, with an estimated 50 ms saving. It remains external to avoid duplicating CSS or showing the page without styles while the stylesheet loads.
- An earlier live-page check found that Netlify was serving older HTML and the original PNG. The later PageSpeed results reflect the updated site.
- The report's tiny additional layout shift and forced reflow were associated with Netlify's injected badge, rather than the portfolio's own markup.

## Manual Follow-up

- Test keyboard-only navigation and verify visible focus and logical focus order.
- Check the landmarks, heading navigation, and portrait alternative text with a screen reader.
- Measure text and link contrast, and test reflow at high zoom on desktop and mobile.
- Rerun PageSpeed against the deployed version. Automated checks do not replace manual testing.
