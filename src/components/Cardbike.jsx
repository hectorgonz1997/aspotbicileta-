import React from 'react';
import { Card, CardBody, CardFooter, Stack, Heading, Divider, ButtonGroup, Button, Image, Text } from '@chakra-ui/react';

function Cardbike({ bikesData }) {
  return (
    <section className="flex flex-wrap justify-center gap-6 mb-10">
      {bikesData.map((bike, index) => (
        <Card key={index} maxW='sm' className="transition-transform shadow-md hover:shadow-lg hover:scale-105">
          <CardBody>
            <Image
              src={bike.image}
              alt={bike.alt}
              borderRadius='lg'
            />
            <Stack mt='6' spacing='3'>
              <Heading size='md'>{bike.name}</Heading>
              <Text>{bike.description}</Text>
              <Text className="font-stalinist font-normal" color='blue.600' fontSize='2xl'>
                {bike.price}
              </Text>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter>
            <ButtonGroup spacing='2'>
              <Button variant='solid' colorScheme='blue'>
                Buy now
              </Button>
              <Button variant='ghost' colorScheme='blue'>
                Add to cart
              </Button>
            </ButtonGroup>
          </CardFooter>
        </Card>
      ))}
    </section>
  );
}

export default Cardbike;
