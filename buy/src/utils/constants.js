

export const webSocketUrl= import.meta.env.MODE === "development"?'ws://localhost:8000':'https://sellpersonalitem.vercel.app'
export const BASEURL = "/";
export const IMAGEURL = "";
// import.meta.env.MODE === "development"
//   ? "http://localhost:8000/tmp/"
//   : "https://sell-personal-items-server.vercel.app/tmp/";

export function getFormData(formRef) {
  let formData = {};
  formRef.current.forEach((item) => {
    formData[item.name] = item.value;
  });

  return formData;
}

export const getFormatedDate = (date) => {
  if (date) {
    return date.split("T")[0];
  }
  return null;
};

export const getArrayLength = (array) => {
  return array.length;
};

export function fileToBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);

    reader.readAsDataURL(file);
  });
}

export const sanitizeForId = (label) => {
  return label
    .toLowerCase()
    .replace(/[^\w\s]|(\s+)/g, (_match, group1) => (group1 ? "-" : ""));
};
