import { useForm, ValidationError } from '@formspree/react';
import propTypes from 'prop-types';

const FormContact = ({ customClass }) => {
  const [state, handleSubmit] = useForm('mwkyzqaz');
  if (state.succeeded) {
    return (
      <p className="w-full font-semibold text-2xl text-center py-14">
        Let&apos;s
        <span className="text-transparent bg-clip-text bg-lightGradient"> do </span>
        it!
      </p>
    );
  }
  return (
    <form onSubmit={handleSubmit} className={`flex flex-col items-end ${customClass}`}>
      <input
        type="text"
        name="Name"
        id="name"
        placeholder="Name*"
        className="bg-transparent border-b-2 w-full placeholder-dev-white font-extralight text-sm my-1"
        required
      />
      <ValidationError
        prefix="Name"
        field="Name"
        errors={state.errors}
      />
      <input
        type="email"
        name="E-mail"
        id="mail"
        placeholder="E-mail*"
        className="bg-transparent border-b-2 w-full placeholder-dev-white font-extralight text-sm my-1"
        required
      />
      <ValidationError
        prefix="E-mail"
        field="E-mail"
        errors={state.errors}
      />
      <textarea
        name="Message"
        id="message"
        cols="30"
        rows="1"
        placeholder="Leave a message!"
        className="bg-transparent border-b-2 w-full placeholder-dev-white font-extralight text-sm my-1 resize-y h-6"
      />
      <ValidationError
        prefix="Mensaje"
        field="Message"
        errors={state.errors}
      />
      <button
        type="submit"
        disabled={state.submitting}
        className="my-4 py-1.5 px-4 rounded-md font-medium bg-dev-violet hover:bg-lightGradient hover:text-dev-white"
      >
        Submit
      </button>
    </form>
  );
};

FormContact.propTypes = {
  customClass: propTypes.string,
};

FormContact.defaultProps = {
  customClass: '',
};

export default FormContact;
