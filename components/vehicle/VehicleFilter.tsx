import { DashIcon } from "@radix-ui/react-icons";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

const VehicleFilter = ({
  priceMin,
  priceMax,
  vehicleType,
  setPriceMin,
  setPriceMax,
  setVehicleType,
  handlePriceChange,
}: {
  priceMin: number;
  priceMax: number;
  vehicleType: string;
  setPriceMin: (value: number) => void;
  setPriceMax: (value: number) => void;
  setVehicleType: (value: string) => void;
  handlePriceChange: (e: React.ChangeEvent<HTMLInputElement>, cb: any) => void;
}) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Filter Vehicles</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <Label htmlFor="location">Location</Label>
            <Input id="location" placeholder="Enter a location" />
          </div>
          <div>
            <Label htmlFor="price-range">Price Range</Label>

            <div className="flex items-center justify-between gap-2">
              <Input
                id="price-range"
                placeholder="0"
                value={priceMin}
                onChange={(e) => handlePriceChange(e, setPriceMin)}
              />
              <DashIcon className="w-4 h-4" />
              <Input
                placeholder="100"
                value={priceMax}
                onChange={(e) => handlePriceChange(e, setPriceMax)}
              />
            </div>
          </div>
          <div>
            <Label htmlFor="vehicle-type">Vehicle Type</Label>
            <Select value={vehicleType} onValueChange={setVehicleType}>
              <SelectTrigger>
                <SelectValue placeholder="Select a type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="car">Car</SelectItem>
                <SelectItem value="motorbike">Motorbike</SelectItem>
                <SelectItem value="rv">RV</SelectItem>
                <SelectItem value="boat">Boat</SelectItem>
                <SelectItem value="truck">Truck</SelectItem>
                <SelectItem value="bus">Bus</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default VehicleFilter;
