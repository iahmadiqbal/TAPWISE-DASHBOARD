"use client";
import React from "react";
import {
  FiCheck,
  FiZap,
  FiUsers,
  FiCreditCard,
  FiCalendar,
  FiTrendingUp,
} from "react-icons/fi";
import { FaCrown } from "react-icons/fa";

const plans = [
  {
    name: "Starter",
    price: "$29",
    period: "/month",
    description: "Perfect for individuals and small teams",
    features: [
      "Up to 5 NFC cards",
      "Basic customization",
      "Email support",
      "Analytics dashboard",
      "Mobile app access",
    ],
    current: false,
    popular: false,
  },
  {
    name: "Professional",
    price: "$79",
    period: "/month",
    description: "Best for growing businesses",
    features: [
      "Up to 25 NFC cards",
      "Advanced customization",
      "Priority support",
      "Advanced analytics",
      "Custom branding",
      "Lead management",
      "Team collaboration",
    ],
    current: true,
    popular: true,
  },
  {
    name: "Enterprise",
    price: "$199",
    period: "/month",
    description: "For large organizations",
    features: [
      "Unlimited NFC cards",
      "Full customization",
      "24/7 phone support",
      "White-label solution",
      "API access",
      "Advanced integrations",
      "Dedicated account manager",
      "Custom development",
    ],
    current: false,
    popular: false,
  },
];

const SubscriptionComponents = () => {
  return (
    <div className="space-y-8 --tapwise-border: 240 6% 90%; ">
      {/* Current Plan Overview */}
      <div className="border border-border rounded-lg bg-white shadow-soft">
        <div className="p-6 pb-3">
          <h3 className="text-tapwise-black font-semibold flex items-center">
            <FaCrown className="h-5 w-5 mr-2 text-tapwise-yellow" />
            Current Plan
          </h3>s
        </div>
        <div className="p-6 pt-3">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-tapwise-black">
                Professional
              </div>
              <div className="text-sm text-tapwise-gray">Current Plan</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold --tapwise-yellow">$79</div>
              <div className="text-sm text-tapwise-gray">Per Month</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-500">15/25</div>
              <div className="text-sm text-tapwise-gray">Cards Used</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-500">
                Mar 15, 2024
              </div>
              <div className="text-sm text-tapwise-gray">Next Billing</div>
            </div>
          </div>
        </div>
      </div>

      {/* Usage Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="border border-border rounded-lg bg-white shadow-soft">
          <div className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-tapwise-gray">
                  Cards Created
                </p>
                <p className="text-2xl font-bold text-tapwise-black">15</p>
                <p className="text-xs text-green-500">of 25 available</p>
              </div>
              <FiUsers className="h-8 w-8 text-tapwise-yellow" />
            </div>
          </div>
        </div>

        <div className="border border-border rounded-lg bg-white shadow-soft">
          <div className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-tapwise-gray">
                  Total Scans
                </p>
                <p className="text-2xl font-bold text-tapwise-black">2,847</p>
                <p className="text-xs text-green-500">+12% this month</p>
              </div>
              <FiTrendingUp className="h-8 w-8 text-green-500" />
            </div>
          </div>
        </div>

        <div className="border border-border rounded-lg bg-white shadow-soft">
          <div className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-tapwise-gray">
                  Active Leads
                </p>
                <p className="text-2xl font-bold text-tapwise-black">128</p>
                <p className="text-xs text-blue-500">+8% this month</p>
              </div>
              <FiZap className="h-8 w-8 text-blue-500" />
            </div>
          </div>
        </div>
      </div>

      {/* Available Plans */}
      <div>
        <h2 className="text-2xl font-bold text-tapwise-black mb-6">
          Available Plans
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan, idx) => {
            const cardClasses = `border border-border rounded-lg bg-white shadow-soft relative ${
              plan.current ? "ring-2 ring-tapwise-yellow" : ""
            } ${plan.popular ? "border-tapwise-yellow" : ""}`;

            const buttonClasses = `w-full ${
              plan.current
                ? "bg-tapwise-gray text-white cursor-not-allowed"
                : plan.popular
                ? "bg-tapwise-yellow text-tapwise-black hover:bg-tapwise-yellow-hover"
                : "bg-white text-tapwise-black border border-tapwise-yellow hover:bg-tapwise-yellow-light"
            } rounded-md h-9 px-4 transition-colors`;

            return (
              <div key={idx} className={cardClasses}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 transform">
                    <span className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium bg-tapwise-yellow text-tapwise-black">
                      Most Popular
                    </span>
                  </div>
                )}
                {plan.current && (
                  <div className="absolute -top-3 right-4">
                    <span className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium bg-green-500 text-white">
                      Current Plan
                    </span>
                  </div>
                )}

                <div className="p-6 pb-2 text-center">
                  <h3 className="font-semibold text-tapwise-black">
                    {plan.name}
                  </h3>
                  <div className="mt-4">
                    <span className="text-3xl font-bold text-tapwise-black">
                      {plan.price}
                    </span>
                    <span className="text-tapwise-gray">{plan.period}</span>
                  </div>
                  <p className="text-sm text-tapwise-gray mt-2">
                    {plan.description}
                  </p>
                </div>

                <div className="p-6 pt-0">
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-sm">
                        <FiCheck className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-tapwise-gray">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button className={buttonClasses} disabled={plan.current}>
                    {plan.current ? "Current Plan" : "Upgrade"}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Billing History */}
      <div className="border border-border rounded-lg bg-white shadow-soft">
        <div className="p-6 pb-3">
          <h3 className="text-tapwise-black font-semibold flex items-center">
            <FiCreditCard className="h-5 w-5 mr-2" />
            Billing History
          </h3>
        </div>
        <div className="p-6 pt-0">
          <div className="space-y-4">
            {[
              {
                plan: "Professional Plan",
                date: "February 15, 2024",
                amount: "$79.00",
              },
              {
                plan: "Professional Plan",
                date: "January 15, 2024",
                amount: "$79.00",
              },
              {
                plan: "Professional Plan",
                date: "December 15, 2023",
                amount: "$79.00",
              },
            ].map((row, i) => (
              <div
                key={i}
                className="flex items-center justify-between p-4 border border-border rounded-lg"
              >
                <div className="flex items-center space-x-4">
                  <FiCalendar className="h-5 w-5 text-tapwise-gray" />
                  <div>
                    <p className="font-medium text-tapwise-black">{row.plan}</p>
                    <p className="text-sm text-tapwise-gray">{row.date}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-medium text-tapwise-black">{row.amount}</p>
                  <span className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium bg-green-100 text-green-800">
                    Paid
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionComponents;
