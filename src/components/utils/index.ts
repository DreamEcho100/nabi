const defaults = {
  "max-w": "max-w-main",
  mx: "mx-auto",
  w: "w-full",
};
export function getSectionInnerContainerClassNames(params?: {
  mx?: string;
  w?: string;
  "max-w"?: string;
}) {
  return `${params?.["max-w"] ?? defaults["max-w"]} ${
    params?.w ?? defaults.w
  } ${params?.mx ?? defaults.mx}`;
}

export function getServerSectionInnerContainerClassNames(params?: {
  mx?: string;
  w?: string;
  "max-w"?: string;
}) {
  return `${params?.["max-w"] ?? defaults["max-w"]} ${
    params?.w ?? defaults.w
  } ${params?.mx ?? defaults.mx}`;
}
