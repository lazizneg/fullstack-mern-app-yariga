import { useState } from 'react';
import { useGetIdentity } from '@pankod/refine-core';
import { FieldValues, useForm } from '@pankod/refine-react-hook-form';
import Form from 'components/common/Form';
import { useNavigate } from '@pankod/refine-react-router-v6';

const CreateProperty = () => {
  const navigate = useNavigate();
  const { data: user } = useGetIdentity();
  const [propertyImage, setPropertyImage] = useState({ name: '', url: '' });
  const { refineCore: { onFinish, formLoading }, register, handleSubmit } = useForm();

  const handleImageChange  = () => {}
  const onFinishHandler = () => {}

  return (
    <Form 
      type="Create"
      register={register}
      onFinish={onFinish}
      formLoading={formLoading}
      handleSubmit={handleSubmit}
      propertyImage={propertyImage}
      handleImageChange={handleImageChange}
      onFinishHandler={onFinishHandler}
    />
  );
};

export default CreateProperty;