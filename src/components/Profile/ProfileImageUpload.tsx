import { useRef, useState } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-toastify';

import { profileService } from '@apis/index';
import { Avatar, Button } from '@components/common';
import { CACHE_KEYS } from '@constants';
import useMyProfile from './hook/useMyProfile';

export default function ProfileImageUpload() {
  const { data: src, isLoading } = useMyProfile();
  const [imageUrl, setImageUrl] = useState(src.url);
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
      {isLoading ? (
        <Avatar src={imageUrl} width="9rem" />
      ) : (
        <Avatar src={src.url} width="9rem" />
      )}

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
