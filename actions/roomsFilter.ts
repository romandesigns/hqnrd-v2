"use server";
export async function handleRedirect(formData: FormData) {
  console.log(formData.get("category"));

  // redirect(`/${lang}/habitaciones/${value}`);
}
