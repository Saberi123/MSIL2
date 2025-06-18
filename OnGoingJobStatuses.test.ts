import { OngoingJobStatuses } from './OnGoingJobStatuses';

describe('OngoingJobStatuses enum', () => {
  it('should have JobNotStarted defined correctly', () => {
    expect(OngoingJobStatuses.JobNotStarted).toBe('Job not started');
  });

  it('should have OutForAssistance defined correctly', () => {
    expect(OngoingJobStatuses.OutForAssistance).toBe('Out for assistance');
  });

  it('should have ResolvedOnCall defined correctly', () => {
    expect(OngoingJobStatuses.ResolvedOnCall).toBe('Resolved on call');
  });

  it('should have ReachedCustomerLocation defined correctly', () => {
    expect(OngoingJobStatuses.ReachedCustomerLocation).toBe(
      'Reached customer location'
    );
  });

  it('should have CustomerDeniedAssistance defined correctly', () => {
    expect(OngoingJobStatuses.CustomerDeniedAssistance).toBe(
      'Customer denied assistance'
    );
  });

  it('should have VehicleArrivedAtServiceCenter defined correctly', () => {
    expect(OngoingJobStatuses.VehicleArrivedAtServiceCenter).toBe(
      'Vehicle arrived at service center'
    );
  });

  it('should have VehicleHandoverToServiceCenter defined correctly', () => {
    expect(OngoingJobStatuses.VehicleHandoverToServiceCenter).toBe(
      'Vehicle handed over to service center'
    );
  });

  it('should have all enum keys defined correctly', () => {
    expect(Object.keys(OngoingJobStatuses)).toEqual([
      'JobNotStarted',
      'OutForAssistance',
      'ResolvedOnCall',
      'ReachedCustomerLocation',
      'CustomerDeniedAssistance',
      'VehicleArrivedAtServiceCenter',
      'VehicleHandoverToServiceCenter',
    ]);
  });

  it('should have all enum values defined correctly', () => {
    expect(Object.values(OngoingJobStatuses)).toEqual([
      'Job not started',
      'Out for assistance',
      'Resolved on call',
      'Reached customer location',
      'Customer denied assistance',
      'Vehicle arrived at service center',
      'Vehicle handed over to service center',
    ]);
  });
});
