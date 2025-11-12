// 🧹 Clean and return plain text from HTML strings
export const cleanHTML = (htmlString = "") => {
  if (!htmlString) return "";

  // Decode common HTML entities
  const decoded = htmlString
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'")
    .replace(/&nbsp;/g, " ")
    .replace(/&hellip;/g, "…"); // handle ellipsis too

  // Remove all HTML tags like <p>, <br>, <strong>
  const noTags = decoded.replace(/<[^>]+>/g, "");

  // Remove extra spaces and trim
  return noTags.trim();
};
