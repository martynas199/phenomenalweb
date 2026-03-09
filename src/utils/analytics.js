const MAX_LABEL_LENGTH = 120;

function normalizeText(value) {
  return (value || "").replace(/\s+/g, " ").trim();
}

function toCtaId(value) {
  const normalized = normalizeText(value).toLowerCase();
  return normalized.replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

export function extractCtaMetadata(element) {
  if (!element) {
    return null;
  }

  const rawLabel = element.getAttribute("data-cta-label") || element.textContent || "";
  const ctaText = normalizeText(rawLabel).slice(0, MAX_LABEL_LENGTH);
  const ctaId = element.getAttribute("data-cta") || toCtaId(ctaText) || "cta";
  const destination =
    element.getAttribute("href") || element.getAttribute("data-cta-destination") || "";

  return {
    ctaId,
    ctaText,
    destination,
  };
}

export function trackCtaClick({ ctaId, ctaText, destination, pagePath }) {
  if (typeof window === "undefined") {
    return;
  }

  const payload = {
    event: "cta_click",
    cta_id: ctaId,
    cta_text: ctaText,
    cta_destination: destination,
    page_path: pagePath || window.location.pathname,
    page_title: document.title,
  };

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(payload);

  if (typeof window.gtag === "function") {
    window.gtag("event", "cta_click", {
      cta_id: ctaId,
      cta_text: ctaText,
      cta_destination: destination,
      page_path: payload.page_path,
    });
  }
}

export function trackLeadSubmit({ source = "unknown", method = "unknown", pagePath }) {
  if (typeof window === "undefined") {
    return;
  }

  const payload = {
    event: "lead_submit",
    lead_source: source,
    lead_method: method,
    page_path: pagePath || window.location.pathname,
    page_title: document.title,
  };

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(payload);

  if (typeof window.gtag === "function") {
    window.gtag("event", "lead_submit", {
      lead_source: source,
      lead_method: method,
      page_path: payload.page_path,
    });
  }
}

export function trackPageView({ pagePath, pageTitle }) {
  if (typeof window === "undefined") {
    return;
  }

  const payload = {
    event: "page_view",
    page_path: pagePath || window.location.pathname,
    page_title: pageTitle || document.title,
  };

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(payload);

  if (typeof window.gtag === "function") {
    window.gtag("event", "page_view", {
      page_path: payload.page_path,
      page_title: payload.page_title,
    });
  }
}
