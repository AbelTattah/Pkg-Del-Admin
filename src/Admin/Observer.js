class Observer extends Admin {
  constructor() {
    super(
      firstName,
      LastName,
      id,
      (type = "Obs"),
      username,
      (isloggedIn = false),
      email
    );
    this.deliveryId = "N/A";
    this.riderUsername = "N/A";
  }

  sendRiderMessage() {}
}
