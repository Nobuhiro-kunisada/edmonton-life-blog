type Props = {
  name: string;
  picture: string;
};

const Avatar = ({ name, picture }: Props) => {
  return (
    <div className="flex items-center">
      {/* className に "object-cover" を追加しました */}
      <img 
        src={picture} 
        className="w-12 h-12 rounded-full mr-4 object-cover" 
        alt={name} 
      />
      <div className="text-xl font-bold">{name}</div>
    </div>
  );
};

export default Avatar;
