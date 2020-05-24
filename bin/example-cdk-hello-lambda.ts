#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { ExampleCdkHelloLambdaStack } from '../lib/example-cdk-hello-lambda-stack';

const app = new cdk.App();
new ExampleCdkHelloLambdaStack(app, 'ExampleCdkHelloLambdaStack');
