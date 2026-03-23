import * as path from 'path';

// Import type definitions for AWS services
import { AWS } from 'aws-sdk';

// Define types for application configuration
interface Config {
  aws: {
    region: string;
    credentials: {
      accessKeyId: string;
      secretAccessKey: string;
    };
  };
  logging: {
    level: string;
    console: boolean;
    file: string;
  };
}

// Define type for cluster configuration
interface ClusterConfig {
  clusterName: string;
  clusterVersion: string;
  instanceType: string;
  numberOfInstances: number;
}

// Define type for SSH credentials
interface SshCredentials {
  username: string;
  privateKey: string;
}

// Define type for EBS volume configuration
interface EbsVolume {
  volumeType: string;
  size: number;
}

// Define type for IAM role configuration
interface IamRole {
  roleArn: string;
  assumeRolePolicyDocument: string;
}

// Define type for Kubernetes configuration
interface KubernetesConfig {
  clusterName: string;
  clusterVersion: string;
  instanceType: string;
  numberOfInstances: number;
  ebsVolume: EbsVolume;
  iamRole: IamRole;
  sshCredentials: SshCredentials;
}

// Define type for deployment configuration
interface DeploymentConfig {
  clusterConfig: ClusterConfig;
  kubernetesConfig: KubernetesConfig;
  config: Config;
}

// Define type for deployment result
interface DeploymentResult {
  status: string;
  message: string;
}

// Define type for script execution result
interface ScriptExecutionResult {
  status: string;
  message: string;
  exitCode: number;
}