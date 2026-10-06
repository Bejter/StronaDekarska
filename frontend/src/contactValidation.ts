export function contactValidationMessage(rawValue: string): string {
  const value = rawValue.trim();
  if (!value) return "Podaj numer telefonu lub adres e-mail.";

  if (value.includes("@")) {
    const localPart = value.split("@")[0];
    const email = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?)+$/;
    return value.length <= 254 && localPart.length <= 64 &&
      !localPart.startsWith(".") && !localPart.endsWith(".") && !localPart.includes("..") && email.test(value)
      ? ""
      : "Podaj poprawny adres e-mail, np. jan@example.pl.";
  }

  // Accept Polish numbers and international numbers with familiar separators.
  if (/^(?:\+|00)?[1-9][0-9 ()-]*$/.test(value)) {
    const digits = value.replace(/\D/g, "");
    const international = value.startsWith("+") || value.startsWith("00");
    const number = value.startsWith("00") ? digits.slice(2) : digits;
    const balancedParentheses = /^(?:[^()]|\([0-9 ]+\))*$/.test(value);
    if (balancedParentheses && (international
      ? number.length >= 7 && number.length <= 15
      : /^[1-9]\d{8}$/.test(number) || /^48[1-9]\d{8}$/.test(number))) return "";
  }

  return "Podaj poprawny telefon, np. 664 983 540 lub +48 664 983 540, albo adres e-mail.";
}
