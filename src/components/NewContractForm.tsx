import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Grid,
  Input,
  styled,
  Typography,
} from "@mui/material";
import { ContractFieldsData } from "../constants/contractFields";
import { useForm } from "react-hook-form";
import { FormData } from "./CustomTextField";

const Wrapper = styled(Box)`
  text-align: center;
  display: flex;
  justify-content: center;
`;

const Header = styled(Typography)`
  color: #002877;
  font-weight: 500;
  font-size: 20px;
  line-height: 28px;
  font-family: "Montserrat";
  font-style: normal;
  margin-bottom: 35px;
  margin-top: 30px;
`;

const CustomLabel = styled(FormLabel)`
  font-family: "Montserrat";
  font-style: normal;
  font-size: 14px;
  line-height: 22px;
  color: #293452;
`;

const Field = styled("div")`
  display: flex;
  gap: 18px;
  align-items: center;
  margin-bottom: 24px;
`;

const UnnecessaryText = styled("span")`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  color: rgba(0, 0, 0, 0.25);
`;

const Asterisk = styled("span")`
  color: #dc1832;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
`;

const BlockWrapper = styled("div")`
  border-bottom: 1px solid #e8e8e8;
  &:last-child {
    border-bottom: none;
  }
  width: 1160px;
`;

const LabelGrid = styled(Grid)`
  width: 755px;
  justify-content: right;
`;

const ComponentGrid = styled(Grid)`
  justify-content: left;
`;
const ButtonWrapper = styled("div")`
  display: flex;
  width: 500px;
  justify-content: space-between;
  gap: 16px;
  margin: 20px 29.3% 40px auto;
`;
const SignButton = styled(Button)`
  width: 240px;
  background: #dc1832;
  border: 1px solid #dc1832;
  box-shadow: 0px 2px 0px rgba(0, 0, 0, 0.043);
  border-radius: 2px;
  height: 38px;
  padding: 8px 16px;
  box-sizing: border-box;
  text-transform: none;
  &:hover {
    background: #dc1832;
    border: 1px solid #dc1832;
    box-shadow: 0px 2px 0px rgba(0, 0, 0, 0.043);
  }
`;
const PreviewButton = styled(Button)`
  width: 240px;
  height: 38px;
  border: 1px solid #dc1832;
  color: #dc1832;
  border-radius: 2px;
  padding: 8px 16px;
  text-transform: none;
  &:hover {
    background: #ffffff;
    border: 1px solid #dc1832;
    color: #dc1832;
  }
`;

export const NewContractForm = () => {
  const { handleSubmit } = useForm<FormData>();
  const onSubmit = handleSubmit((data) => console.log(data));
  return (
    <Wrapper>
      <form onSubmit={onSubmit}>
        <FormControl>
          {ContractFieldsData.map((block) => (
            <BlockWrapper key={block.title}>
              <Header>{block.title}</Header>

              {block.fields.map(
                ({ label, Component = Input, required, ...field }) => (
                  <Grid container direction="column" key={label}>
                    <Field>
                      <LabelGrid item container>
                        <CustomLabel focused={false}>
                          {required && <Asterisk>* </Asterisk>}
                          {label}
                          {!required && (
                            <UnnecessaryText> (необязательный)</UnnecessaryText>
                          )}
                          :
                        </CustomLabel>
                      </LabelGrid>
                      <ComponentGrid item container>
                        <Component
                          {...field}
                          label={label}
                          required={required}
                        />
                      </ComponentGrid>
                    </Field>
                  </Grid>
                )
              )}
            </BlockWrapper>
          ))}
        </FormControl>
        <ButtonWrapper>
          <PreviewButton variant="outlined" type="submit">
            Предпросмотр
          </PreviewButton>
          <SignButton variant="contained" type="submit">
            Подписать с ЭЦП
          </SignButton>
        </ButtonWrapper>
      </form>
    </Wrapper>
  );
};
