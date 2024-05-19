import { describe, it } from 'vitest';
import { base, mediaBase } from '../base';
import * as playableSpecializationApi from './playable-specialization';

describe.concurrent('playableSpecializationApi', () => {
  it('playableSpecialization should return a resource object with the correct path and namespace', ({ expect }) => {
    const specializationId = 123;
    const resource = playableSpecializationApi.playableSpecialization(specializationId);

    expect(resource.path).toBe(`${base}/playable-specialization/${specializationId}`);
    expect(resource.namespace).toBe('static');
  });

  it('playableSpecializationIndex should return a resource object with the correct path and namespace', ({
    expect,
  }) => {
    const resource = playableSpecializationApi.playableSpecializationIndex();

    expect(resource.path).toBe(`${base}/playable-specialization/index`);
    expect(resource.namespace).toBe('static');
  });

  it('playableSpecializationMedia should return a resource object with the correct path and namespace', ({
    expect,
  }) => {
    const specializationId = 123;
    const resource = playableSpecializationApi.playableSpecializationMedia(specializationId);

    expect(resource.path).toBe(`${mediaBase}/playable-specialization/${specializationId}`);
    expect(resource.namespace).toBe('static');
  });
});
