export interface IUser {
  image: string;
  displayName: string;
}

export const User = ({ image, displayName }: IUser) => {
  return (
    <div>
      <img src={image} alt='user' />
      <p>{displayName}</p>
    </div>
  );
};
