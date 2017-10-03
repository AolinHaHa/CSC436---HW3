export class Patient {
  emailAddress: string;
  profileImage: string;
  doctorName: string;
  FName: string;
  LName: string;

  constructor(FName: string, LName: string, emailAddress: string, profileImage: string, doctorName: string) {
    this.emailAddress = emailAddress;
    this.profileImage = profileImage;
    this.doctorName = doctorName;
    this.FName = FName;
    this.LName = LName;

  }
  }
