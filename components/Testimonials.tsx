import React, { useState } from 'react';
import styled from '@emotion/styled';
import { Box, Image, Text, Flex } from 'rebass';
import VisibilitySensor from 'react-visibility-sensor';
import { FaStar } from 'react-icons/fa';

const content = [
  {
    photo: './static/images/josephine.jpg',
    name: 'Josephine',
    description: `GLD Funding came in handy when I desperately needed capital for my business expenses. The process was quick
    and straightforward. You don't need good credit to be approved, which made everything much smoother.`,
  },
  {
    photo: './static/images/anas.jpg',
    name: 'Anas Iqbual',
    description: `I was glad that they were there to help when my business needed them. Overall, a pleasant experience.`,
  },
  {
    photo: './static/images/allina.jpg',
    name: 'Allina Joel',
    description: `The people at GLD Funding are really helpful and attentive. If you need help with your cash advance, they will
    make sure to have all of your questions answered.`,
  },
  {
    photo: './static/images/albert.jpg',
    name: 'Albert Chirls',
    description: `Very easy and fair. I've been working with GLD for the past three years now, and I do not have any complaints. I
    must say they are very cooperative and understanding of your business needs.`,
  },
];

const Card = styled(Box)`
  box-shadow: 0 18px 50px rgba(0, 0, 0, 0.07);
  position: relative;
  img {
    position: absolute;
    top: 0;
    left: 0;
    margin: 0 !important;
    transform: translateX(-50%) translateY(-50%);
    border-radius: 50%;
  }
`;

export const Testimonials = () => {
  const [animated, setAnimated] = useState(false);
  const [sense, setSensor] = useState(true);

  const onView = (inView: boolean) => {
    if (sense && inView && !animated) {
      setAnimated(true);
      setSensor(false);
    }
  };

  return (
    <VisibilitySensor onChange={onView} active={sense} partialVisibility minTopValue={300}>
      <Box as="section" py={[5, '5rem']}>
        <Box
          m="auto"
          maxWidth="1200px"
          p={2}
          css={{
            transition: `opacity 300ms cubic-bezier(0.4, 0, 0.2, 1),
            transform 300ms cubic-bezier(0.4, 0, 0.2, 1) `,
            opacity: animated ? '1' : '0',
            transform: animated ? 'translateX(0px)' : 'translateX(20px)',
          }}
        >
          <Text
            as="h4"
            textAlign="center"
            fontSize={[5, 6]}
            fontFamily="heading"
            color="gray300"
            mb={2}
          >
            Better service{` `}
            <Text as="span" color="blue500">
              starts here
            </Text>
          </Text>
          <Text as="p" fontSize={[2, 3]} textAlign="center" maxWidth="800px" m="auto">
            We have history with various businesses and the experience needed to make your business
            grow and succeed.
          </Text>
        </Box>

        <Flex flexWrap="wrap" m="auto" maxWidth="1200px" p={2} mt={5}>
          {content.map((el, i) => (
            <Box
              key={el.name}
              width={[1, 1 / 2]}
              py={5}
              pl={[4, 5]}
              pr={[2, 5]}
              css={{
                transition: `opacity 600ms cubic-bezier(0.4, 0, 0.2, 1) 0.${i * 2}s,
                transform 600ms cubic-bezier(0.4, 0, 0.2, 1) 0.${i * 2}s
                `,
                opacity: animated ? '1' : '0',
                transform: animated ? 'scale(1.05)' : 'scale(1)',
              }}
            >
              <Card width={1} height="100%" p={[3, 5]}>
                <Image
                  alt={el.name}
                  src={el.photo}
                  width={['50px', '70px']}
                  height={['50px', '70px']}
                />

                <Flex justifyContent="space-between" alignItems="center" mb={1}>
                  <Text as="h6" fontSize={[2, 3]} fontFamily="heading" mb={[1, 2]} color="gray800">
                    {el.name}
                  </Text>
                  <Box as="span" color="yellow300" fontSize={1}>
                    {[1, 2, 3, 4, 5].map(el => (
                      <Box as={FaStar} mx="0.1em" key={el} />
                    ))}
                  </Box>
                </Flex>

                <Text as="p" fontSize={2} lineHeight={['auto', 'heading']}>
                  <em>“{el.description}”</em>
                </Text>
              </Card>
            </Box>
          ))}
        </Flex>
      </Box>
    </VisibilitySensor>
  );
};
