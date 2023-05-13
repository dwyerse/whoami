import React from "react";
import Container from "@cloudscape-design/components/container";
import SpaceBetween from "@cloudscape-design/components/space-between";
import Button from "@cloudscape-design/components/button";
import Icon from "@cloudscape-design/components/icon";
import Popover from "@cloudscape-design/components/popover";
import StatusIndicator from "@cloudscape-design/components/status-indicator";

type SuccessProps = {
  answer: string;
  shareable: string;
};

const Success = (props: SuccessProps) => {
  const { answer, shareable } = props;

  return (
    <SpaceBetween size="s">
      <Container>
        <SpaceBetween direction="horizontal" size="l">
          <h1>Victory!</h1>
          <Icon name="status-positive" size="large" variant="success" />
        </SpaceBetween>
        <h3>The answer was {answer}.</h3>
        <Popover dismissButton={false} position="top" size="small" triggerType="custom" content={<StatusIndicator type="success">Copied to clipboard</StatusIndicator>}>
          <Button
            iconName="share"
            onClick={() => {
              navigator.clipboard.writeText(shareable);
            }}
          >
            Share
          </Button>
        </Popover>
      </Container>
    </SpaceBetween>
  );
};

export default React.memo(Success);
