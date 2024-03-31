import { Form, useForm } from 'react-hook-form'
import { useState } from 'react'
import { Center, Box, Card, CardBody, CardHeader, Text, Heading, Input, Button, Stack, FormLabel, FormHelperText, FormControl, Select, Divider, CardFooter } from '@chakra-ui/react'
export const PredictForm = () => {
    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm();
    const [jsonData, setJsonData] = useState(null);
    const onSubmit = async (data) => {
        try {
            const parsedData = Object.entries(data).reduce((acc, [key, value]) => {
                acc[key] = parseInt(value);
                return acc;
            }, {});
            const response = await fetch('https://hepatitis-c-prediction.onrender.com/', {
                method: 'POST',
                body: JSON.stringify(parsedData),
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (response.ok) {
                const json = await response.json();
                setJsonData(json);
            } else {
                throw new Error('Error: ' + response.status);
            }
        } catch (error) {
            console.error(error);
        }
    }
    return (
        <>
            <Center>
                <Box minWidth={{ base: '90%', 'md': '80%', 'lg': '40%' }} bg={"whitesmoke"} mb={'10px'}>
                    <Card>
                        <CardHeader>
                            <Heading size='md'>Data Form</Heading>
                            <Text>Patient Data To Determine Hepatitis C</Text>
                        </CardHeader>
                        <CardBody>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <Stack spacing={3}>
                                    <Box>
                                        <FormControl>
                                            <FormLabel>Enter Your Age:</FormLabel>
                                            <Input {...register("Age", {
                                                required: "Age is required",
                                            })} type='number' placeholder='Enter your age' />
                                            {errors.Age && <FormHelperText color='red'>{errors.Age.message}</FormHelperText>}
                                        </FormControl>
                                    </Box>
                                    <Box>
                                        <FormControl>
                                            <FormLabel>Enter Your Gender:</FormLabel>
                                            <Select {...register("Sex", {
                                                required: "Gender is required",
                                            })} placeholder='Select your gender'>
                                                <option value={0}>Male</option>
                                                <option value={1}>Female</option>
                                            </Select>
                                            {errors.Sex && <FormHelperText color='red'>{errors.Sex.message}</FormHelperText>}
                                        </FormControl>
                                    </Box>
                                    <Box>
                                        <FormControl>
                                            <FormLabel>Enter Your Albumin:</FormLabel>
                                            <Input {...register("ALB", {
                                                required: "Albumin is required",
                                            })} type='number' placeholder='(ALB) g/L' />
                                            {errors.ALB && <FormHelperText color='red'>{errors.ALB.message}</FormHelperText>}
                                        </FormControl>
                                    </Box>
                                    <Box>
                                        <FormControl>
                                            <FormLabel>Enter Your Alkaline Phosphatase:</FormLabel>
                                            <Input {...register("ALP", {
                                                required: "Alkaline Phosphatase is required",
                                            })} type='number' placeholder='(ALP) IU/L' />
                                            {errors.ALP && <FormHelperText color='red'>{errors.ALP.message}</FormHelperText>}
                                        </FormControl>
                                    </Box>
                                    <Box>
                                        <FormControl>
                                            <FormLabel>Enter Your Alanine Aminotransferase:</FormLabel>
                                            <Input {...register("ALT", { required: "Alanine Aminotransferase is required" })} type='number' placeholder='(ALT) U/L' />
                                            {errors.ALT && <FormHelperText color='red'>{errors.ALT.message}</FormHelperText>}
                                        </FormControl>
                                    </Box>
                                    <Box>
                                        <FormControl>
                                            <FormLabel>Enter Your Aspartate Aminotransferase:</FormLabel>
                                            <Input {...register("AST", { required: "Aspartate Aminotransferase is required" })} type='number' placeholder='(AST) U/L' />
                                            {errors.AST && <FormHelperText color='red'>{errors.AST.message}</FormHelperText>}
                                        </FormControl>
                                    </Box>
                                    <Box>
                                        <FormControl>
                                            <FormLabel>Enter Your Bilirubin:</FormLabel>
                                            <Input {...register("BIL", { required: "Bilirubin is required" })} type='number' placeholder='(BIL) µmol/L' />
                                            {errors.BIL && <FormHelperText color='red'>{errors.BIL.message}</FormHelperText>}
                                        </FormControl>
                                    </Box>
                                    <Box>
                                        <FormControl>
                                            <FormLabel>Enter Your Cholinesterase:</FormLabel>
                                            <Input {...register("CHE", { required: "Cholinesterase is required" })} type='number' placeholder='(CHE) kU/L' />
                                            {errors.CHE && <FormHelperText color='red'>{errors.CHE.message}</FormHelperText>}
                                        </FormControl>
                                    </Box>
                                    <Box>
                                        <FormControl>
                                            <FormLabel>Enter Your Cholesterol:</FormLabel>
                                            <Input {...register("CHOL", { required: "Cholesterol is required" })} type='number' placeholder='(CHOL) mmol/L' />
                                            {errors.CHOL && <FormHelperText color='red'>{errors.CHOL.message}</FormHelperText>}
                                        </FormControl>
                                    </Box>
                                    <Box>
                                        <FormControl>
                                            <FormLabel>Enter Your Creatinine:</FormLabel>
                                            <Input {...register("CREA", { required: "Creatinine is required" })} type='number' placeholder='(CREA) µmol/L' />
                                            {errors.CREA && <FormHelperText color='red'>{errors.CREA.message}</FormHelperText>}
                                        </FormControl>
                                    </Box>
                                    <Box>
                                        <FormControl>
                                            <FormLabel>Enter Your Gamma-Glutamyl Transferase:</FormLabel>
                                            <Input {...register("GGT", { required: "Gamma-Glutamyl Transferase is required" })} type='number' placeholder='(GGT) U/L' />
                                            {errors.GGT && <FormHelperText color='red'>{errors.GGT.message}</FormHelperText>}
                                        </FormControl>
                                    </Box>
                                    <Box>
                                        <FormControl>
                                            <FormLabel>Enter Your Protein:</FormLabel>
                                            <Input {...register("PROT", { required: "Protein is required" })} type='number' placeholder='(PROT) g/L' />
                                            {errors.PROT && <FormHelperText color='red'>{errors.PROT.message}</FormHelperText>}
                                        </FormControl>
                                    </Box>
                                    <Box>
                                        <Button isLoading={isSubmitting} colorScheme='teal' variant='outline' type='submit'>Submit</Button>
                                    </Box>
                                </Stack>
                            </form>
                        </CardBody>
                        <Divider />
                        <CardFooter>
                            {jsonData && <Box>
                                <h1><b>Predicted Value:</b>{jsonData.output}</h1>
                            </Box>
                            }
                        </CardFooter>
                    </Card>
                </Box>
            </Center>
        </>
    )
}