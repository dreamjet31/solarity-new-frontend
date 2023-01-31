import React, { FC } from "react";
import { useRouter } from 'next/router'
import JoinTwitterRoomModal from 'components/Modals/JoinTwitterRoomModal';

const TwitterJoinModal: FC = () => {

  const router = useRouter()
  const { room, name } = router.query

  return (
    <JoinTwitterRoomModal type={room} name={name} />
  );
  
};

export default TwitterJoinModal;
