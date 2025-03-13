export function Alert() {
  return (
    <div class="alert alert-danger alert-dismissible fade show" role="alert">
      Vous avez dépasser vos révenus! Vous ne pouvez donc pas ajouter de
      dépense.
      <button
        type="button"
        class="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
      ></button>
    </div>
  );
}
