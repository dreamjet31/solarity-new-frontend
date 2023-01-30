import React, { FC } from "react";
import { useRouter } from 'next/router'
import JoinTwitterRoomModal from 'components/Modals/JoinTwitterRoomModal';
const TwitterJoinModal: FC = () => {
  const router = useRouter()
  const { type, name } = router.query
  return (
    <JoinTwitterRoomModal type={type} name={name} />
  );
};

export default TwitterJoinModal;
