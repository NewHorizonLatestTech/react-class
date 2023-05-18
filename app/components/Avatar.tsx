/* eslint-disable @next/next/no-img-element */

interface AvatarType {
  person:Person;
  size:number;
}

interface Person {
  name:string;
  imageId:string;
}

export default function Avatar({person , size}:AvatarType) {
  const name = person.name;
  const avatar = `https://i.imgur.com/${person.imageId}.jpg`;
  const description = "Adeema Amir";
  const classavatar = "avatar";
  // const name = "Adeema Amir";
  return (
    <>
      <img
        className={classavatar}
        src={avatar}
        title={description}
        alt={description}
      />
      <h1>Hello EveryOne My Name Is {name}</h1>
    </>
  );
}
