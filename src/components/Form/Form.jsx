import { useFormInput } from "../../cutomHooks/useFormInput/useFormInput";

export default function Form() {
  const firstNameProps = useFormInput("Yudi");
  const lastNameProps = useFormInput("Yamada");

  return (
    <>
      <label>
        First Name
        <input {...firstNameProps} />
      </label>

      <label>
        Last Name
        <input {...lastNameProps} />
      </label>
      <p>
        <b>
          Bom dia, {firstNameProps.value} {lastNameProps.value}.
        </b>
      </p>
    </>
  );
}
