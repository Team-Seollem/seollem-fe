import { useRef, useState } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-toastify';

import { profileService } from '@apis/index';
import { Avatar, Button } from '@components/common';
import { CACHE_KEYS } from '@constants';

type Props = {
  src: string;
};

const defaultAvatarImage = new URL(
  '../../assets/default/avatarDefault.png',
  import.meta.url
).href;

export default function ProfileImageUpload({ src }: Props) {
  const [imageUrl, setImageUrl] = useState(src || defaultAvatarImage);
  const inputEl = useRef<HTMLInputElement | null>(null);
  const queryClient = useQueryClient();
  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (!file) return;

    const formData = new FormData();
    formData.append('file', file);

    try {
      const url = await profileService.imageUpload(formData);
      setImageUrl(url);
      queryClient.invalidateQueries(CACHE_KEYS.myProfile);
    } catch (error) {
      toast.error('이미지 업로드에 실패했습니다.');
    }
  };

  const handleFileBtn = () => {
    inputEl.current?.click();
  };

  return (
    <>
      <Avatar src={imageUrl} width="9rem" />
      <input
        hidden
        ref={inputEl}
        type="file"
        accept="image/*"
        onChange={handleFileChange}
      />
      <Button
        onClick={handleFileBtn}
        type="button"
        styleType="neutral"
        size="small"
      >
        프로필 사진 변경
      </Button>
    </>
  );
}
