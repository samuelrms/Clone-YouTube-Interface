import { AccountCircleOutlined } from '@mui/icons-material';

import { CustomButton } from './SignInButton.styles';

export const SignInButton = () => {
  return (
    <CustomButton
      color={'secondary'}
      LinkComponent={'a'}
      variant="outlined"
      startIcon={<AccountCircleOutlined />}
    >
      Sign In
    </CustomButton>
  );
};
